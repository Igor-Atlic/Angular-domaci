export interface Annotations {
  start: number,
  end: number,
  spot: string,
  confidence: number,
  id: number,
  title: string,
  uri: URL,
  label: string
  image?: Image
  abstract?: string
  categories?: string[]
}
export interface Image {
  full: URL,
  thumbnail: URL
}
export interface Tem1 {
  time: number,
  annotations: Annotations[],
  lang: string,
  langConfidence: number,
  timestamp: string
}
export interface Similarity {
  time: number,
  similarity: number,
  lang: string,
  langConfidence: number,
  timestamp: string
}
export interface DetectedLangs{
  lang: string,
  confidence: number
}
export interface Tem2 {
  time: number,
  detectedLangs: DetectedLangs[],
  lang: string,
  langConfidence: number,
  timestamp: string
}
export interface Sentiment{
  score: number,
  type: string

}
export interface Tem3 {
   time: number,
   sentiment: Sentiment,
   lang: string,
   timestamp: string
 }
