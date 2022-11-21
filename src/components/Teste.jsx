import React, { useState } from "react";
import styled from "styled-components";

const Above = styled.div`
  background-color: grey;
  position: absolute;
`;

function Teste() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide it" : "Show me"}
      </button>

      {show && (
        <Above>
          <ul>
            <li>edit comment</li>
            <li>delete comment</li>
          </ul>
        </Above>
      )}
    </div>
  );
}

export default Teste;
