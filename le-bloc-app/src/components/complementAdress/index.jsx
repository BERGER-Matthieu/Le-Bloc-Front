import { useState } from "react";
import * as request from "../../common/requests";

export default function complementAdresse() {
    const [InputValue, setInputValue] = useState('');
    const [IdValue, setIdValue] = useState('');
    const [Output, setOutput] = useState([]);

    const handleInputChange = (event, setValue, setOutput) => {
        const newValue = event.target.value;
        setValue(newValue);
    
        request.TryInputAddress(newValue)
          .then((result) => {
            setOutput(result.places || []);
          })
          .catch((error) => console.error('Error fetching output:', error));
      };

    const handleSuggestionClick = (suggestion, setInput, setOutput, setId) => {
      try{
        setId(suggestion.address.coord.lon + ";" + suggestion.address.coord.lat);
        setInput(suggestion.name);
        setOutput([]);
      }
      catch(e)
      {
        alert("please choose a valid address");
      }
      
    };

    return (
        <div>
          <form>
            <label>
              <input
                type="text"
                placeholder='adresse'
                value={InputValue}
                onChange={(e) => handleInputChange(e, setInputValue, setOutput)}
              />
            </label>
          </form>
          <div
          onMouseEnter={(e) => (e.currentTarget.style.cursor = 'pointer')}
          onMouseLeave={(e) => (e.currentTarget.style.cursor = 'default')}
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '0.5rem',
          }}
          >
            {Output.length > 0 ? (
            Output.map((item, index) => (
                <p key={index}
                onClick={() => handleSuggestionClick(item, setInputValue, setOutput, setIdValue)}>
                {item.name}
                </p>
            ))
            ) : (
            <p></p>
            )}
          </div>
        </div>
      );
}