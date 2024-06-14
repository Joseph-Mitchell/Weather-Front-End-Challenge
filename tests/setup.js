import { afterEach } from "vitest";
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

beforeAll(() => {
    import.meta.env.VITE_APP_LOCATION_URL = "http://localhost:3000/locations";
    import.meta.env.VITE_APP_WEATHER_URL="http://localhost:3000/weather/[lat][lon]"
});

afterEach(() => {
    cleanup();
});