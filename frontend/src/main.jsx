import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Styles from './styles/index.jsx';
import BookingTicket from './components/commons/BookingTicket/index.jsx';
import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Styles>
            <Provider store={store}>
                <App />
            </Provider>
        </Styles>
    </React.StrictMode>,
);

const rootElement = document.getElementById('root');
const bookingTicketElement = document.createElement('div');

ReactDOM.createRoot(bookingTicketElement).render(
    <React.StrictMode>
        <Styles>
            <Provider store={store}>
                <BookingTicket />
            </Provider>
        </Styles>
    </React.StrictMode>,
);

rootElement.parentNode.appendChild(bookingTicketElement);
