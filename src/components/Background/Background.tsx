import dynamic from 'next/dynamic'
import styles from './Background.module.css'

const EffectSquarePerlin = dynamic(
    () => import('@/components/Background/EffectSquarePerlin/EffectSquarePerlin'),
    { ssr: false }
)

function Background ({active} : {active?: boolean}) {
    return (
        <div id='background' className={`${styles.background} ${active ? styles.active : ''}`}>
            <EffectSquarePerlin/>
        </div>
    )
}

export default Background