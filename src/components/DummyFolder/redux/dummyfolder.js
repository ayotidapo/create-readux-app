const AJX_CALL_SUCCESS = "AJX_CALL_SUCCESS";
const AJX_CALL_FAILS = "AJX_CALL_FAILS";

export function dummyajax(state = true, action = {}) {
  switch (action.type) {
    case AJX_CALL_SUCCESS:
      return !state;
    case AJX_CALL_FAILS:
      return false;
    default:
      return state;
  }
}

export function ajxsuccessfxn() {
  return { type: AJX_CALL_SUCCESS };
}
export function ajxfailfxn() {
  return { type: AJX_CALL_FAILS };
}
