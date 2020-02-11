export interface Config {
  port: number;

  origin: {
    [key: string]: OriginConfig;
  };
}

export interface OriginConfig {
  host: string;
}
