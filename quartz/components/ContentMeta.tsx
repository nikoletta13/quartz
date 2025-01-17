import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"

export default (() => {
  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text
    if (text) {
      const segments: string[] = []
      const { text: timeTaken, words: _words } = readingTime(text)

      // if (fileData.dates) {
      //   segments.push(formatDate(getDate(cfg, fileData)!))
      // }

      if (fileData.dates) {
        const createdDate =  (formatDate(getDate(cfg, fileData)!))//formatDate(fileData.dates.modified)
        // const modifiedDate = (formatDate(getDate(cfg, fileData)!))// Assuming fileData contains a 'dates' object with 'modified' property

        segments.push(`Last updated: ${createdDate}`)
        // if (createdDate == modifiedDate){
        //   segments.push(formatDate(fileData.dates.modified))
        // } else{
        //   segments.push(`Created: ${createdDate}, Modified: ${modifiedDate}`)
        // }
      }

      segments.push(timeTaken)
      return <p class={`content-meta ${displayClass ?? ""}`}>{segments.join(", ")}</p>
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor


    //   segments.push(timeTaken)
    //   return <div className="content-meta">{segments.join(", ")}</div>
    // } else {
    //   return null
    // }
