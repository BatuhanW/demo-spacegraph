export declare module ISpaceX {
  interface Launch {
    __typename: string;
    id: string;
    details: string | null;
    launch_date_unix: number;
    launch_success: boolean;
    launch_site: {
      __typename: string;
      site_name: string;
      site_name_long: string;
    };
    mission_id: string[];
    mission_name: string;
  }

  interface Mission {
    __typename: string;
    description: string;
    name: string;
    website: string;
    wikipedia: string;
    payloads: MissionPayloadItem[];
  }

  interface MissionPayloadItem {
    __typename: string;
    nationality: string;
  }

  interface MissionResponse {
    data?: {
      mission: Mission;
    };
  }

  interface LaunchAndMissionResponse {
    data?: {
      mission: Mission;
      launch: Launch;
    };
  }
}
