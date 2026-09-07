import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client securely server-side
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // API Health Check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      company: 'CV. FUSENA JAYA',
      tagline: 'Biro Perjalanan Ziarah dan Wisata',
      timestamp: new Date().toISOString(),
    });
  });

  // AI Travel Consultant Endpoint
  app.post('/api/ai-consultant', async (req, res) => {
    try {
      const { prompt, userContext } = req.body;

      if (!prompt || typeof prompt !== 'string') {
        res.status(400).json({ error: 'Prompt is required' });
        return;
      }

      if (!ai) {
        // Fallback response if GEMINI_API_KEY is not set
        res.json({
          reply: `Halo! Terima kasih telah menghubungi Asisten AI CV. FUSENA JAYA. 
                  \n\nUntuk pertanyaan mengenai "${prompt}", tim customer service kami siap membantu secara langsung 24/7 melalui WhatsApp 0857-9968-9175 (+62 857-9968-9175). 
                  \n\nLayanan CV. FUSENA JAYA:
                  - Sewa Bus Pariwisata (Medium, Big Bus, Sleeper)
                  - Paket Wisata (Study Tour, KKL, Ziarah Wali)
                  - Sewa Elf & Mobil Pribadi + Driver
                  - Jasa Fotografer & Video Cinematic / Drone`,
        });
        return;
      }

      const systemInstruction = `
You are "FusenAI", the professional, warm, and highly knowledgeable Travel & Ziarah Consultant for "CV. FUSENA JAYA - Biro Perjalanan Ziarah dan Wisata".
CV. FUSENA JAYA is based in Central Java (Demak / Kudus / Semarang) and serves nationwide tours across Indonesia (Jawa, Bali, Madura, Sumatra, Lombok).

Services offered by CV. FUSENA JAYA:
1. Sewa Bus Pariwisata: Medium Bus (31-35 Seat), Big Bus (48-59 Seat), Luxury Sleeper Bus.
2. Paket Wisata & Ziarah:
   - Ziarah Wali Songo (Jawa Tengah, Jawa Timur, Jawa Barat), Ziarah Habib & Ulama
   - Study Tour Sekolah & KKL Mahasiswa (Yogyakarta, Bandung, Bali, Malang-Bromo)
   - Kunjungan Industri (Jakarta, Bandung, Surabaya, Semarang)
3. Sewa Elf: Elf Short (12-14 seat) & Elf Long / Executive (19-21 seat)
4. Sewa Mobil Pribadi & Driver: Avanza, Veloz, Innova Reborn, Innova Zenix Hybrid, HiAce Premio/Commuter, Fortuner
5. Jasa Sopir Pribadi Professional & Ramah
6. Rental Kamera: DSLR, Mirrorless (Sony/Canon), GoPro, Drone DJI
7. Jasa Fotografer & Video Cinematic Tour (TikTok/Reels/Dokumenter HD)

Guidelines for your response:
- Respond in polite, friendly, professional Indonesian.
- Keep answers helpful, structured with bullet points where clear.
- Recommend appropriate vehicle sizes based on passenger count (e.g. 15-18 pax -> HiAce/Elf Long; 30 pax -> Medium Bus; 45-50 pax -> Big Bus).
- Always include a encouraging closing sentence inviting them to complete booking or consult on WhatsApp.
- If asked for estimated price, provide reasonable Indonesian travel industry price ranges (e.g., Sewa Bus Pariwisata Big Bus ~Rp 3.000.000 - Rp 3.800.000 / hari tergantung rute & BBM; Elf ~Rp 1.300.000 - Rp 1.800.000 / hari).
`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ reply: response.text || 'Maaf, sistem tidak memberikan respon.' });
    } catch (err: any) {
      console.error('Gemini API Error:', err);
      res.status(500).json({
        error: 'Gagal memproses permintaan AI.',
        details: err?.message || 'Server error',
      });
    }
  });

  // Mock Database for Booking Submissions
  const bookings: Array<any> = [];

  app.post('/api/bookings', (req, res) => {
    const booking = {
      id: `FSN-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      ...req.body,
    };
    bookings.push(booking);
    res.json({
      success: true,
      message: 'Permintaan booking berhasil dicatat',
      booking,
    });
  });

  app.get('/api/bookings', (req, res) => {
    res.json({ total: bookings.length, bookings });
  });

  // Serve Vite Frontend
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[CV. FUSENA JAYA] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
