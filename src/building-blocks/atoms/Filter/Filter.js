import React from 'react';

export default function Filter({ filters, filterStyles, filterHandle }) {
    return (
        <React.Fragment>
            <div style={filterStyles.headFilters}>
                {filters.map((filter, index) => {
                    return <button
                        key={index}
                        style={filterStyles.headFiltersButton}
                        value={filter.title}
                        onClick={(e) => filterHandle(e)}
                    >
                        {filter.title}
                    </button>
                })}
            </div>
        </React.Fragment>
    )
};
