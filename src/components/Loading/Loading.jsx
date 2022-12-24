// scss
import './loading.scss'

// gifs
import gif1 from '../../gifs/loading/1.gif'
import gif2 from '../../gifs/loading/2.gif'
import gif3 from '../../gifs/loading/3.gif'
import gif4 from '../../gifs/loading/4.gif'
import gif5 from '../../gifs/loading/5.gif'


/* 
 * esse componente espera receber duas props, size e height
 * size -> tamanho do gif de loading, 1 é o maior e 5 o menor
 * height -> altura que o gif precisa preencher, caso não passe, o valor será "fit-content" 
 */


function Loading(props) {

  let gif = 5
  switch(props.size) {
    case 1:
      gif = gif1
    break;
    case 2:
      gif = gif2
    break;
    case 3:
      gif = gif3
    break;
    case 4:
      gif = gif4
    break;
    case 5:
      gif = gif5
    break;
    default:
      gif = 5
  }

  return ( 
    <div className="loading" style={{minWidth: props.minWidth}}>
      <img className='imgLoading' src={gif} alt="Loading..." style={{height: props.height}} />
    </div>
   );
}

Loading.defaultProps = {
  height: "fit-content",
  minWidth: "fit-content"
}

export default Loading;