const NavbarApi = () => (
  <div class="mt-5">
    <h2>API</h2>
    <h3>Navbar</h3>
    <code>
      import {"{"} Navbar {"}"} from 'solid-bootstrap'
    </code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Set a custom element for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bg </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A convenience prop for adding <code>bg-*</code> utility classes since they are so
                  commonly used here.
                  <code>light</code> and <code>dark</code> are common choices but any{" "}
                  <code>bg-*</code> class is supported, including any custom ones you might define.
                </p>
                <p>
                  Pairs nicely with the <code>variant</code> prop.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">collapseOnSelect </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Toggles <code>expanded</code> to <code>false</code> after the onSelect event of a
                  descendant of a child <code>&lt;Nav&gt;</code> fires. Does nothing if no{" "}
                  <code>&lt;Nav&gt;</code> or <code>&lt;Nav&gt;</code> descendants exist.
                </p>
                <p>
                  Manually controlling <code>expanded</code> via the onSelect callback is
                  recommended instead, for more complex operations that need to be executed after
                  the <code>select</code> event of <code>&lt;Nav&gt;</code> descendants.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">expand </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>false</code>
                  <span> | </span>
                  <code>true</code>
                  <span> | </span>
                  <code>'sm'</code>
                  <span> | </span>
                  <code>'md'</code>
                  <span> | </span>
                  <code>'lg'</code>
                  <span> | </span>
                  <code>'xl'</code>
                  <span> | </span>
                  <code>'xxl'</code>
                </span>
              </div>
            </td>
            <td>
              <code>true</code>
            </td>
            <td>
              <div>
                <p>
                  The breakpoint, below which, the Navbar will collapse. When <code>true</code> the
                  Navbar will always be expanded regardless of screen size.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">expanded </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controlled by: <code>onToggle</code>, initial prop:{" "}
                      <code>defaultExpanded</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>Controls the visiblity of the navbar body</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">fixed </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'top'</code>
                  <span> | </span>
                  <code>'bottom'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Create a fixed navbar along the top or bottom of the screen, that scrolls with the
                  page. A convenience prop for the <code>fixed-*</code> positioning classes.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onSelect </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  A callback fired when a descendant of a child <code>&lt;Nav&gt;</code> is
                  selected. Should be used to execute complex closing or other miscellaneous actions
                  desired after selecting a descendant of <code>&lt;Nav&gt;</code>. Does nothing if
                  no <code>&lt;Nav&gt;</code> or <code>&lt;Nav&gt;</code>
                  descendants exist. The callback is called with an eventKey, which is a prop from
                  the selected <code>&lt;Nav&gt;</code> descendant, and an event.
                </p>
                <div>
                  <pre>
                    <code>function (eventKey: mixed,event?: SyntheticEvent)</code>
                  </pre>
                </div>
                <p>
                  For basic closing behavior after all <code>&lt;Nav&gt;</code> descendant onSelect
                  events in mobile viewports, try using collapseOnSelect.
                </p>
                <p>
                  Note: If you are manually closing the navbar using this <code>OnSelect</code>{" "}
                  prop, ensure that you are setting <code>expanded</code> to false and not{" "}
                  <em>toggling</em> between true and false.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onToggle </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div class="mb-2">
                <small>
                  <em class="text-info">
                    <span>
                      controls <code>expanded</code>
                    </span>
                  </em>
                </small>
              </div>
              <div>
                <p>
                  A callback fired when the <code>&lt;Navbar&gt;</code> body collapses or expands.
                  Fired when a <code>&lt;Navbar.Toggle&gt;</code> is clicked and called with the new{" "}
                  <code>expanded</code>
                  boolean value.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">role </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'navigation'</code>
            </td>
            <td>
              <div>
                <p>
                  The ARIA role for the navbar, will default to 'navigation' for Navbars whose{" "}
                  <code>as</code> is something other than <code>&lt;nav&gt;</code>.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">sticky </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'top'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Position the navbar at the top of the viewport, but only after scrolling past it.
                  A convenience prop for the <code>sticky-top</code> positioning class.
                </p>
                <p>
                  {" "}
                  <strong>
                    Not supported in &lt;= IE11 and other older browsers without a polyfill
                  </strong>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">variant </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'light'</code>
                  <span> | </span>
                  <code>'dark'</code>
                </span>
              </div>
            </td>
            <td>
              <code>'light'</code>
            </td>
            <td>
              <div>
                <p>
                  The general visual variant a the Navbar. Use in combination with the{" "}
                  <code>bg</code> prop, <code>background-color</code> utilities, or your own
                  background styles.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'navbar'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and modifier class names
                  prefix. <strong>This is an escape hatch</strong> for working with heavily
                  customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>Navbar.Brand</h3>
    <code>
      import {"{"} Navbar {"}"} from 'solid-bootstrap'
    </code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Set a custom element for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">href </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  An href, when provided the Brand will render as an <code>&lt;a&gt;</code> element
                  (unless <code>as</code> is provided).
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'navbar'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and modifier class names
                  prefix. <strong>This is an escape hatch</strong> for working with heavily
                  customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Navbar.Toggle</h3>
    <code>
      import {"{"} Navbar {"}"} from 'solid-bootstrap'
    </code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;button&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">children </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The toggle content. When empty, the default toggle will be rendered.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">label </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'Toggle navigation'</code>
            </td>
            <td>
              <div>
                <p>An accessible ARIA label for the toggler button.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onClick </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'navbar-toggler'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and modifier class names
                  prefix. <strong>This is an escape hatch</strong> for working with heavily
                  customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Navbar.Collapse</h3>
    <code>
      import {"{"} Navbar {"}"} from 'solid-bootstrap'
    </code>
    <div class="overflow-auto mt-4 mb-5 border border-light">
      <table class="bg-white mb-0 table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'navbar-collapse'</code>
            </td>
            <td>
              <div>
                <p>
                  Change the underlying component CSS base class name and modifier class names
                  prefix. <strong>This is an escape hatch</strong> for working with heavily
                  customized bootstrap css.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default NavbarApi;
