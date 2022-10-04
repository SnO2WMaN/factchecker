{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  # dev
  inputs = {
    devshell.url = "github:numtide/devshell";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    ...
  } @ inputs:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {
          inherit system;
          overlays = with inputs; [
            devshell.overlay
          ];
        };
      in {
        devShells.default = pkgs.devshell.mkShell {
          packages = with pkgs; [
            alejandra
            dprint
            treefmt
            nodejs-14_x
            nodePackages.pnpm
          ];
          commands = [
            {
              package = "treefmt";
              category = "formatters";
            }
          ];
          env = [
            {
              name = "PUPPETEER_EXECUTABLE_PATH";
              value = "${pkgs.chromium}/bin/chromium";
            }
            {
              name = "PATH";
              eval = "$PATH:$PRJ_ROOT/node_modules/.bin";
            }
          ];
        };
      }
    );
}
