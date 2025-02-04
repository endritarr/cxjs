import {Grid, HtmlElement, Button, TextField, NumberField, Content, Tab} from "cx/widgets";
import {Controller, bind} from "cx/ui";
import {casual} from '../data/casual';
import {Md} from '../../../components/Md';
import {CodeSplit} from '../../../components/CodeSplit';
import {CodeSnippet} from '../../../components/CodeSnippet';

class PageController extends Controller {
    onInit() {
        //init grid data
        if (!this.store.get('$page.records'))
            this.shuffle();
    }

    shuffle() {
        this.store.set(
            "$page.records",
            Array
                .from({length: 10})
                .map((v, i) => ({
                    fullName: casual.full_name,
                    continent: casual.continent,
                    browser: casual.browser,
                    os: casual.operating_system,
                    visits: casual.integer(1, 100)
                }))
        );
    }
}

let MyResizableGrid = <cx>
    <Grid
        records-bind="$page.records"
        columns={[
            {
                header: {
                    text: "Name",
                    width: bind('$page.colWidth.fullName'),
                    resizable: true
                },
                field: "fullName",
                sortable: true
            },
            {
                header: {
                    text: "Continent",
                    width: bind('$page.colWidth.continent'),
                    resizable: true
                },
                field: "continent",
                sortable: true
            },
            {
                header: {
                    text: "Browser",
                    width: bind('$page.colWidth.browser'),
                    resizable: true
                },
                field: "browser",
                sortable: true
            },
            {
                header: {
                    text: "OS",
                    width: bind('$page.colWidth.os'),
                    resizable: true
                },

                field: "os",
                sortable: true
            },
            {
                header: {
                    text: "Visits",
                    width: bind('$page.colWidth.visits'),
                    resizable: false
                },
                field: "visits",
                sortable: true,
                align: "right"
            }
        ]}
    />
</cx>;

export const ColumnResizing = <cx>
    <Md controller={PageController}>
        <CodeSplit>
            # Column Resizing

            Grid supports column resizing. To enable resizing on a column set the `resizable` flag to `true`.
            If column widths need to be persisted, add the `width` binding or use `onColumnResize` event to process new measures.

            <MyResizableGrid/>

            Resize columns on the top and observe how changes are applied to the grid below too.

            <MyResizableGrid/>

            <Content name="code">
                <div>
                    <Tab value={{bind: "$page.code.tab", defaultValue: "grid"}} tab="grid" mod="code">
                        <code>Grid</code>
                    </Tab>
                    <Tab value-bind="$page.code.tab" tab="controller" mod="code">
                        <code>Controller</code>
                    </Tab>
                </div>

                <CodeSnippet visible:expr="{$page.code.tab}=='controller'" fiddle="1q59A8u3">{`
                class PageController extends Controller {
                    onInit() {
                        //init grid data
                        if (!this.store.get('$page.records'))
                            this.shuffle();
                    }

                    shuffle() {
                        this.store.set(
                            "$page.records",
                            Array
                                .from({length: 10})
                                .map((v, i) => ({
                                    fullName: casual.full_name,
                                    continent: casual.continent,
                                    browser: casual.browser,
                                    os: casual.operating_system,
                                    visits: casual.integer(1, 100)
                                }))
                        );
                    }
                }
                `}</CodeSnippet>
                <CodeSnippet visible:expr="{$page.code.tab}=='grid'" fiddle="1q59A8u3">{`                
                    <Grid
                        records-bind="$page.records"        
                        columns={[
                            {
                                header: {
                                    text: "Name",
                                    width: bind('$page.colWidth.fullName'),
                                    resizable: true
                                },
                                field: "fullName",
                                sortable: true
                            },
                            {
                                header: {
                                    text: "Continent",
                                    width: bind('$page.colWidth.continent'),
                                    resizable: true
                                },
                                field: "continent",
                                sortable: true
                            },
                            {
                                header: {
                                    text: "Browser",
                                    width: bind('$page.colWidth.browser'),
                                    resizable: true
                                },
                                field: "browser",
                                sortable: true
                            },
                            {
                                header: {
                                    text: "OS",
                                    width: bind('$page.colWidth.os'),
                                    resizable: true
                                },
                
                                field: "os",
                                sortable: true
                            },
                            {
                                header: {
                                    text: "Visits",
                                    width: bind('$page.colWidth.visits'),
                                    resizable: false
                                },
                                field: "visits",
                                sortable: true,
                                align: "right"
                            }
                        ]}
                    />
                `}
                </CodeSnippet>
            </Content>
        </CodeSplit>

    </Md>
</cx>;
