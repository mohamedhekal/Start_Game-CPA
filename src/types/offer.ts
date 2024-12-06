export interface UserStats {
  playerId: string;
  totalPoints: number;
  completedOffers: number;
}

export interface ClickedOffer {
  id: string;
  offerName: string;
  clickedAt: string;
}

export interface CompletedOffer {
  id: string;
  offerName: string;
  points: number;
  completedAt: string;
}

export interface OfferDetails {
  userStats: UserStats;
  clickedOffers: ClickedOffer[];
  completedOffers: CompletedOffer[];
}