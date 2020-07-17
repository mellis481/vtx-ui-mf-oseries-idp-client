import * as React from "react";

interface OwnProps {
  name: string;
  authInfo: any;
}

interface ComponentState {
  requests: number;
}

export class Root extends React.Component<OwnProps, ComponentState> {
  private userInfo: any;

  constructor(props: OwnProps) {
    super(props);
    this.state = { requests: 0 };
  }

  componentDidUpdate(prevProps: OwnProps, prevState: ComponentState) {
    if (prevState.requests != this.state.requests) {
      this.setState({ requests: 0 });
    }
  }

  render() {
    const { name, authInfo } = this.props;

    return (
      <>
        <h2>{name} microfrontend</h2>
        {!authInfo ? (
          <div>No auth info provided. Not good!</div>
        ) : (
          <pre>{JSON.stringify(authInfo, null, 2)}</pre>
        )}
        <div style={{ marginTop: "20px" }}>
          <button
            type="button"
            onClick={() => {
              const that = this;
              fetch("http://kopas0036:9000/oseries-auth/user", {
                headers: {
                  Authorization: `Bearer ${authInfo.access_token}`,
                },
              })
                .then((response) => response.json())
                .then((userInfo) => {
                  that.userInfo = userInfo;
                  that.setState({ requests: 1 });
                });
            }}
          >
            Get User Info
          </button>
          {this.userInfo != null && (
            <pre>{JSON.stringify(this.userInfo, null, 2)}</pre>
          )}
        </div>
      </>
    );
  }
}
