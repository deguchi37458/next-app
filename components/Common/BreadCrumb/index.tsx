import Link from "next/link";
import styles from './index.module.scss'

type Props = {
  lists: {
    name: string;
    path?: string;
  }[];
}

export default function BreadCrumb({lists}: Props):JSX.Element {
  return (
    <ul className={styles.breadCrumb}>
      {lists.map(({ name = "ホーム", path = "/" }, index) => (
        <li key={index}>
          {lists.length - 1 !== index ? (
            <Link href={path}>
              <a className={styles.next}>{name}</a>
            </Link>
          ) : (
            <span>{name}</span>
          )}
        </li>
      ))}
    </ul>
  )
}