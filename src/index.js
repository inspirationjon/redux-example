import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as Authentication } from './context/Authentication';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ReduxProvider store={store}>
					<Authentication>
						<App />
					</Authentication>
				</ReduxProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
