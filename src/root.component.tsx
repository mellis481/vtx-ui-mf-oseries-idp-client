import * as React from "react";

interface OwnProps {
  name: string;
  user: any;
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
    const { name, user } = this.props;

    return (
      <>
        <h2>{name} microfrontend</h2>
        {!user ? (
          <div>No auth info provided. Not good!</div>
        ) : (
          <pre>{JSON.stringify(user, null, 2)}</pre>
        )}
        <div style={{ marginTop: "20px" }}>
          <button
            type="button"
            onClick={() => {
              const that = this;
              fetch("http://kopas0036:9000/oseries-auth/user", {
                headers: {
                  Authorization: `Bearer ${user.access_token}`,
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
