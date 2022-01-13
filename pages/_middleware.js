import constants from "my-test-package";

export default function middleware() {
  return new Response(JSON.stringify(constants));
}
