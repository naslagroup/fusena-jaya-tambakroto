export type ServiceCategory = 
  | 'bus'
  | 'paket-wisata'
  | 'event-organizer'
  | 'hiace'
  | 'elf'
  | 'mobil'
  | 'sopir'
  | 'kamera'
  | 'fotografer'
  | 'cinematic';

export interface FleetItem {
  id: string;
  name: string;
  category: 'bus' | 'elf' | 'mobil' | 'hiace';
  capacity: string;
  seats: number;
  transmission?: string;
  facilities: string[];
  pricePerDay: number;
  image: string;
  description: string;
  tag?: string;
  recommendedFor: string;
}

export interface TourPackage {
  id: string;
  title: string;
  category: 'ziarah' | 'study-tour' | 'kkl' | 'kunjungan-industri' | 'wisata-alam' | 'domestik' | 'custom' | 'outbound';
  duration: string;
  minPersons: number;
  destinations: string[];
  includes: string[];
  priceStartFrom: number;
  image: string;
  badge?: string;
  description: string;
}

export interface EventOrganizerService {
  id: string;
  title: string;
  category: 'wedding' | 'ulang-tahun' | 'dinas' | 'seminar' | 'reuni' | 'lainnya';
  deliverables: string[];
  priceStartFrom: number;
  image: string;
  description: string;
  badge?: string;
}

export interface CameraGear {
  id: string;
  name: string;
  category: 'dslr' | 'mirrorless' | 'action-cam' | 'drone' | 'lens';
  specs: string;
  pricePerDay: number;
  image: string;
  includes: string[];
}

export interface MediaService {
  id: string;
  title: string;
  type: 'fotografer' | 'cinematic' | 'drone';
  deliverables: string[];
  priceStartFrom: number;
  image: string;
  description: string;
}

export interface BookingFormState {
  category: ServiceCategory;
  selectedItemId: string;
  selectedItemTitle: string;
  startDate: string;
  endDate: string;
  durationDays: number;
  passengerCount: number;
  pickupLocation: string;
  destination: string;
  needDriver: boolean;
  needPhotographer: boolean;
  needCinematic: boolean;
  needDrone: boolean;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'armada' | 'ziarah' | 'tour' | 'cinematic' | 'fotografi';
  image: string;
  videoUrl?: string;
  location: string;
  date: string;
  description: string;
  isCinematic?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Ketua Panitia Ziarah Kudus", "Guru Pembimbing SMAN 1"
  avatar: string;
  rating: number;
  text: string;
  date: string;
  serviceUsed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'armada' | 'pembayaran' | 'dokumentasi';
}
