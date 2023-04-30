export interface IInitialState {
    loading: boolean;
}

const initialState: IInitialState = {
    loading: false,
};

export enum LoadingEnum {
    SetLoading = 'SetLoading',
    UnsetLoading = 'UnsetLoading',
}

type LoadingActionType =
    | {
          type: LoadingEnum.SetLoading;
      }
    | {
          type: LoadingEnum.UnsetLoading;
      };

function LoadingReducer (
    state: IInitialState = initialState,
    action: LoadingActionType
) {
    switch (action.type) {
        case LoadingEnum.SetLoading:
            return {
                loading: true,
            };

        case LoadingEnum.UnsetLoading:
            return { ...initialState };

        default:
            return { ...state };
    }
}

export default LoadingReducer;
