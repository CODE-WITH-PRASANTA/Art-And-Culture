import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './PoojaEssentialsHeader.css';


const PoojaEssentialsHeader = () => {
return (
<header className="pe-header">
<div className="pe-container">
<nav className="pe-breadcrumb" aria-label="breadcrumb">
<button className="pe-link" type="button">Home</button>
<FaChevronRight className="pe-chevron" aria-hidden="true" />
<button className="pe-link" type="button">Pooja Essentials</button>
</nav>


<h1 className="pe-title">Pooja Essentials</h1>
</div>
</header>
);
};


export default PoojaEssentialsHeader;