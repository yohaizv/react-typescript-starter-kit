import { runSaga, Saga } from "redux-saga";

export async function recordSaga(saga: Saga<any[]>, initialAction = {}) {
  const dispatched: any[] = [];

  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    saga,
    initialAction
  ).result;

  return dispatched;
}
