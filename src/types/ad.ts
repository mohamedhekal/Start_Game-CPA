export interface Ad {
  id: string;
  title: string;
  description: string;
  payout: number;
  category: string;
  requirements: string[];
  imageUrl: string;
  conversionRate: number;
}