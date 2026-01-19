import Link from "next/link";
import Styles from "./PaginationControls.module.css"

export const PaginationControls = ({ prev,next }) => {
    return (
        <div className={Styles.PaginationControls}>
            {prev && <Link className={Styles.PrevLink} href={`?page=${prev}`}>Página anterior</Link>}
            <span className={Styles.CurrentPage}>  {(prev || 0)+1}</span>
            {next && <Link className={Styles.NextLink} href={`?page=${next}`}>Próxima página</Link>}
        </div>
    )
}