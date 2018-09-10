
export const updateZipCode = (zipCode) => (
    {
        type: 'UPDATE_ZIP',
        payload: zipCode
    }
);

export const updateForecast = (forecastData) => (
    {
        type: 'UPDATE_FORECAST',
        payload: forecastData
    }
);
