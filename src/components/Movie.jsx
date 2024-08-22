import cannesIcon from '../assets/cannes.svg'
import oscarIcon from '../assets/oscar.svg'
import berlinIcon from '../assets/berlin.svg'
import mostraIcon from '../assets/mostra.svg'
import cesarIcon from '../assets/cesar.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

export default function Movie({warning, title, plot, orig_title, poster, director, oscar, cannes, berlin, mostra, cesar, year, runtime}){

    let icons = []
    if(cannes)
        icons.push(<img className="m-0 h-6" src={cannesIcon} alt="cannes icon" />)
    if(oscar)
        icons.push(<img className="m-0 h-6" src={oscarIcon} alt="oscar icon" />)
    if(berlin)
        icons.push(<img className="m-0 h-6" src={berlinIcon} alt="berlin icon" />)
    if(mostra)
        icons.push(<img className="m-0 h-6" src={mostraIcon} alt="mostra icon" />)
    if(cesar)
        icons.push(<img className="m-0 h-6" src={cesarIcon} alt="cesar icon" />)

    let warningDiv = null
    if(warning !== "")
        warningDiv = <span className="badge badge-outline badge-error !prose-xs"> 
                            <FontAwesomeIcon icon={faTriangleExclamation} /> &nbsp; {warning}
                    </span>

    return <>
        <div className="bg-base-100 shadow-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-items-center grow-0 my-4 rounded-lg overflow-hidden">
            <figure className="my-4 sm:!my-0 ">
                <img src={poster} className="!my-0 max-w-36 grow-0 shrink-0 rounded-lg sm:rounded-none" alt={"poster " + title}/>
            </figure>
            <div className="px-4 p-4 flex flex-col items-start">
                {warningDiv}
                <h2 className="prose-xl font-bold flex items-start gap-2 m-0 flex-wrap text-left">
                    <span>{title}</span>
                    <span className="flex">
                        {icons}
                    </span>
                </h2>
                {title.toLowerCase().replace(/[\s\W]+/g, '') !== orig_title.toLowerCase().replace(/[\s\W]+/g, '') ? 
                    <span className="prose-xs text-gray-400 font-light mb-1">({orig_title})</span>
                    :
                    ""
                }
                <div className="prose-sm text-left font-medium">{director}, {year}, {runtime} min</div>
                <div className="prose-sm text-left mt-2">{plot}</div>
            </div>

           

        </div>
    </>
}