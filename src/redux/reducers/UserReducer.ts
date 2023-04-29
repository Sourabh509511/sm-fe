export interface IInitialState {
    token: string;
    user_id: string;
    email: string;
    is_admin: boolean;
    full_name: string;
}

const initialState: IInitialState = {
    token: '',
    user_id: '',
    email: '',
    is_admin: false,
    full_name: '',
};

export enum UserEnum {
    SetUserData = 'SetUserData',
    UnsetUserData = 'UnsetUserData',
}

type UserActionType =
    | {
          type: UserEnum.SetUserData;
          data: IInitialState;
      }
    | {
          type: UserEnum.UnsetUserData;
      };

function UserReducer (
    state: IInitialState = initialState,
    action: UserActionType
) {
    switch (action.type) {
        case UserEnum.SetUserData:
            return {
                ...state,
                ...action.data,
            };

        case UserEnum.UnsetUserData:
            return initialState;

        default:
            return { ...state };
    }
}

export default UserReducer;
