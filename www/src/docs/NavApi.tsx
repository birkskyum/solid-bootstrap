const NavApi = () => (
  <div class="mt-5">
    <h2>API</h2>
    <h3>Nav</h3>
    <code>
      import {"{"} Nav {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">activeKey </td>
            <td class="font-monospace">
              <div>string | number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Marks the NavItem with a matching <code>eventKey</code> (or <code>href</code> if
                  present) as active.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">cardHeaderBsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">fill </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Have all <code>NavItem</code>s proportionately fill all available width.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">justify </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>
                  Have all <code>NavItem</code>s evenly fill all available width.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">navbar </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Apply styling an alignment for use in a Navbar. This prop will be set
                  automatically when the Nav is used inside a Navbar.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">navbarBsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div></div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">navbarScroll </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Enable vertical scrolling within the toggleable contents of a collapsed Navbar.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">onKeyDown </td>
            <td class="font-monospace">
              <div>function</div>
            </td>
            <td></td>
            <td>
              <div></div>
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
                <p>A callback fired when a NavItem is selected.</p>
                <div class="gatsby-highlight" data-language="js">
                  <pre class="language-js">
                    <code class="language-js">
                      {`
function (
  Any eventKey,
  SyntheticEvent event?
 )                      
                    `}
                    </code>
                  </pre>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">role </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  ARIA role for the Nav, in the context of a TabContainer, the default will be set
                  to "tablist", but can be overridden by the Nav when set explicitly.
                </p>
                <p>
                  When the role is "tablist", NavLink focus is managed according to the ARIA
                  authoring practices for tabs:
                  <a href="https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel">
                    https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
                  </a>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">variant </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'tabs'</code>
                  <span> | </span>
                  <code>'pills'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The visual variant of the nav items.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'nav'</code>
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

    <h3>Nav.Item</h3>
    <code>
      import {"{"} Nav {"}"} from 'solid-bootstrap'
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
              <code>&lt;div&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              bsPrefix <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td>
              <code>'nav-item'</code>
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

    <h3>Nav.Link</h3>
    <code>
      import {"{"} Nav {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">active </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The active state of the NavItem item.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">as </td>
            <td class="font-monospace">
              <div>elementType</div>
            </td>
            <td>
              <code>&lt;a&gt;</code>
            </td>
            <td>
              <div>
                <p>You can use a custom element type for this component.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">disabled </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td>
              <code>false</code>
            </td>
            <td>
              <div>
                <p>The disabled state of the NavItem item.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">eventKey </td>
            <td class="font-monospace">
              <div>string | number</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Uniquely identifies the <code>NavItem</code> amongst its siblings, used to
                  determine and control the active state of the parent <code>Nav</code>
                </p>
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
                  The HTML href attribute for the <code>NavLink</code>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">role </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  The ARIA role for the <code>NavLink</code>, In the context of a 'tablist' parent
                  Nav, the role defaults to 'tab'
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
              <code>'nav-link'</code>
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
    <h3>NavDropdown</h3>
    <code>
      import {"{"} NavDropdown {"}"} from 'solid-bootstrap'
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
            <td class="font-monospace">active </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Style the toggle NavLink as active</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">disabled </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Disables the toggle NavLink</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">id </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  An html id attribute for the Toggle button, necessary for assistive technologies,
                  such as screen readers.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">menuRole </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  An ARIA accessible role applied to the Menu component. When set to 'menu', The
                  dropdown
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">menuVariant </td>
            <td class="font-monospace">
              <div>
                <span>
                  <code>'dark'</code>
                </span>
              </div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Menu color variant.</p>
                <p>Omitting this will use the default light color.</p>
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
              <div>
                <p>
                  An <code>onClick</code> handler passed to the Toggle component
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">renderMenuOnMount </td>
            <td class="font-monospace">
              <div>boolean</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>
                  Whether to render the dropdown menu in the DOM before the first time it is shown
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">rootCloseEvent </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>Which event when fired outside the component will cause it to be closed.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">
              title <sup class="text-danger">required</sup>
            </td>
            <td class="font-monospace">
              <div>node</div>
            </td>
            <td></td>
            <td>
              <div>
                <p>The content of the non-toggle Button.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="font-monospace">bsPrefix </td>
            <td class="font-monospace">
              <div>string</div>
            </td>
            <td></td>
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

export default NavApi;
