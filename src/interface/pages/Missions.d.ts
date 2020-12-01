export declare module IMissions {
  interface launch {
    launch_date_unix: number;
    details: string;
    mission_id: string;
    mission_name: string;
    name: string;
    launch_success: boolean;
    launch_site: {
      site_name: string;
    };
  }
}
