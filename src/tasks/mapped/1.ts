// How can we remove the type annotations from the savingAction and savedAction
// variables but maintain strong typing.

// here
type SavingAction = {
  type: 'saving';
  payload: string[];
};

const savingAction: SavingAction = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};

// here
type SavedAction = {
  type: 'saved';
};

const savedAction: SavedAction = {
  type: 'saved',
};

type Actions = SavingAction | SavedAction;
