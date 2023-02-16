import css from "./Statistics.module.css";

const Statistics=({good,neutral,bad,total,percent})=>{
    return (
        <ul className={css.feedback__statistics}>
            <li className={css.statistics__item}><span className={css.item__name}>Good</span><span className={css.item__value}>{good}</span></li>
            <li className={css.statistics__item}><span className={css.item__name}>Neutral</span><span className={css.item__value}>{neutral}</span></li>
            <li className={css.statistics__item}><span className={css.item__name}>Bad</span><span className={css.item__value}>{bad}</span></li>
            <li className={css.statistics__item}><span className={css.item__name}>Total</span><span className={css.item__value}>{total}</span></li>
            <li className={css.statistics__item}><span className={css.item__name}>Positive feedback</span><span className={css.item__value}>{percent}%</span></li>
        </ul>
    );
}
export default Statistics;
