import React, { useContext } from 'react';
import { DependencyInjection } from '../../contexts/DependencyInjection';

const HomePage = (props) => {
    const dependencyInjection = useContext(DependencyInjection);

    return ( 
        <div>
            HomePage
        </div>
     );
}
 
export default HomePage;