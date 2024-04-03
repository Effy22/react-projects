/**
 * globalcomponente bir tye verilecek butonsa buton inputsa nput
 * lable input buton ve image
 */

function GlobalComponent(props){

    const Component = () => {
        switch(props.type){
            case 'label':
                return <label for="basic-url" class="form-label">Global Component Label Örneği</label>
            case 'input':
                return <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            case 'button':
                return <button type="button" class="btn btn-outline-danger">Danger</button>
            default:
                return <img src="https://picsum.photos/200/200" class="img-thumbnail" alt="..."></img>

        }
    };

    return(
        Component()
    );

}

export default GlobalComponent;