import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){

    const [isExpanded,setExpanded]=useState(false);

    const [note,setNote]=useState({
        title : "",
        content : ""
    });

    function handleChange(event){

        const {name,value}=event.target;

        setNote(prevState => {
            return {
                ...prevState,
                [name]:value
            };
        });
    }

    function handleClick(event){

        props.onAdd(note);

        setNote({
            title : "",
            content : ""
        });

        event.preventDefault();
    }

    function expand(){
        setExpanded(true);
    }


    return (<div>
        <form className="create-note">
            {isExpanded && (
                <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
                )
            }
        
            <textarea onClick={expand} onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." 
            rows={isExpanded ? 3 :1}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={handleClick}>
                    <AddIcon/>
                </Fab>
            </Zoom>
        </form>
    </div>
    );
}

export default CreateArea;