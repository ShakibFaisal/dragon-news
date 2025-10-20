import React, { Suspense } from 'react';
import Allcatagories from './Allcatagories';

const Leftaside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Allcatagories></Allcatagories>

            </Suspense>
           
        </div>
    );
};

export default Leftaside;