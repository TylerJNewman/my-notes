import {Heading} from './mdx/Heading'
import {CustomLink} from './mdx/CustomLink'

const MdxComponents = {
  a: CustomLink,
  h2: (props: any) => {
    return <Heading level="2" id={props.id} props={props} />
  },
  h3: (props: any) => {
    return <Heading level="3" id={props.id} props={props} />
  },
  img: (props: any) => {
    return <img className="rounded-xl" {...props} />
  },
  video: (props: any) => {
    return <video className="rounded-xl" {...props} />
  },
}

export default MdxComponents
