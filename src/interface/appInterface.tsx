

interface activityMain {
  key: Number,
  heading: string,
  xp: string,
  image: {
    src: string,
    alt: string,
  },
  dateTime: string,
}

interface infoMain {
  key: string,
  heading: string,
  value: string,
}

export interface activityInt extends Array<activityMain> { }

export interface infoInt extends Array<infoMain> { }
