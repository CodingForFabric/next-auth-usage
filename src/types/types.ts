interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Country {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface League {
  id: number;
  name: string;
  type: string;
  season: string;
  logo: string;
}

interface Score {
  quarter_1: number;
  quarter_2: number;
  quarter_3: number;
  quarter_4: number;
  over_time: number | null;
  total: number;
}

interface Status {
  long: string;
  short: string;
  timer: number | null;
}

export interface IGames {
  id: number;
  country: Country;
  date: string | number;
  league: League;
  scores: {
    home: Score;
    away: Score;
  };
  stage: null;
  status: Status;
  teams: {
    home: Team;
    away: Team;
  };
  time: string;
  timestamp: number;
  timezone: string;
  week: null;
}
