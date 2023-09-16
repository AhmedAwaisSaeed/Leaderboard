export interface userType {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
}

// export interface record {
//   [id: string]: userType;
// }

export interface UserState {
  users: userType[];
  error: null;
}
