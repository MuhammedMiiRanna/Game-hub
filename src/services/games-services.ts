import apiClient from "./api-client";
import { GameQuery } from "../App";

export interface GamePlatform {
  id: number;
  name: string;
}

export interface GamePlatforms {
  released_at: string;
  platform: GamePlatform;
}

export interface Game {
  id: number;
  name: string;
  // slug: string;
  rating: number;
  rating_top: number;
  background_image: string;
  platforms: GamePlatforms[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

class GamesService {
  getGames(gameQuery: GameQuery) {
    const controller = new AbortController();
    console.log("games-services:", gameQuery);

    const request = apiClient.get<FetchGamesResponse>("/games", {
      // TODO: i did this only to add custom stuff, remove itZ
      params: { ...gameQuery },
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

// export new instance of this class as a default object
export default new GamesService();
