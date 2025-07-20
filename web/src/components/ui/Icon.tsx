import type { IconBaseProps } from "react-icons"
import {
  PiCopy,
  PiDownloadSimple,
  PiLink,
  PiTrash,
  PiWarningLight,
} from "react-icons/pi"

export type TIconName = "copy" | "download" | "link" | "trash" | "warning"

interface IIconProps extends IconBaseProps {
  name: TIconName
}

export const Icon = ({ name, ...props }: IIconProps) => {
  const icons = {
    copy: <PiCopy {...props} />,
    download: <PiDownloadSimple {...props} />,
    link: <PiLink {...props} />,
    trash: <PiTrash {...props} />,
    warning: <PiWarningLight {...props} />,
  }

  return icons[name] || null
}
