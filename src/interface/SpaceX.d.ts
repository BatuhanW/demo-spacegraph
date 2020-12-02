export declare module ISpaceX {
  interface Launch {
    __typename: string;
    id: string;
    launch_date_unix: number;
    details: string;
    mission_id: string[];
    mission_name: string;
    launch_success: boolean;
    launch_site: {
      __typename: string;
      site_name: string;
    };
  }

  interface Mission {
    __typename: string;
    description: string;
    name: string;
    website: string;
    wikipedia: string;
  }
}
