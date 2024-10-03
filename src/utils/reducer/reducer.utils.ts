export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// Overload for actions with payload
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

// Overload for actions without payload
export function createAction<T extends string>(type: T): Action<T>;

// Implementation
export function createAction<T extends string, P>(type: T, payload?: P) {
  if (payload !== undefined) {
    return { type, payload }; // Action with payload
  }
  return { type }; // Action without payload
}
