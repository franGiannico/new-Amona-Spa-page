
import React, { useState } from 'react';
import RightNav from './RightNav';


const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
      className=''
      open={open}
      onClick={() => setOpen(!open)}><svg xmlns="http://www.w3.org/2000/svg" 
      width="40" 
      height="40"
      fill="currentColor" 
      className="bi bi-list" 
      viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
            <div />
            <div />
            <div />
        <RightNav open={open}/>
      </div>
    </>
  )
}
/* <>
  <a class="btn btn-primary" data-bs-toggle="offcanvas" href="/" role="button" aria-controls="offcanvasExample">
    Link with href
  </a>
   <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
      </div>
      <div>
        <ul>
          <li><a class="dropdown-item" href="/">Action</a></li>
          <li><a class="dropdown-item" href="/">Another action</a></li>
          <li><a class="dropdown-item" href="/">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</>
  )
} */

export default Burger