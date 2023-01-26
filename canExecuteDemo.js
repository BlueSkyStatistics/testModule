help = {
    body: `<p class="c1">SEE MIXED MODELS GUIDE IN THE BLUESKY STATISTICS\DOCS FOLDER, THIS GUIDE REFERENCES THE DATASET POTHOFF ROY LONG.SAV IN THE BLUESKY STATISTICS\SAMPLE DATASETS AND DEMOS\MIXED MODELS FOLDER</p><p class="c1">&#x200b;</p><p class="c1">This basic Mixed Models dialog is designed to include random variance within &#160;a single nesting unit. You must specify a nesting unit (e.g. students within classroom, time points within person etc.).</p><p class="c1">We display matrices for random effects. u0 represents the variability in the intercept due to the nesting unit. u1 represents the variability in every slope due to the nesting unit. u0,1 represents the covariance in variability between the intercept and slope. Each model may contain one or more (but not necessarily all) covariance(s).</p><p class="c1">Beta0: This is the intercept</p><p class="c1">Beta1: Represents ALL variables with random effects</p><p class="c1">&#x200b;</p><p class="c1">Matrix of Random effects: Intercept Only</p><table class="c2"><col class="c3"/><col class="c3"/><col class="c3"/><tbody class="c4"><tr class="c4"><td class="c5"><p class="c1">&#x200b;</p></td><td class="c5"><p class="c1">Beta0</p></td><td class="c5"><p class="c1">Beta1</p></td></tr><tr class="c4"><td class="c5"><p class="c1">Beta0</p></td><td class="c5"><p class="c1">u0 (Random Intercept)</p></td><td class="c5"><p class="c1">0</p></td></tr><tr class="c4"><td class="c5"><p class="c1">Beta1</p></td><td class="c5"><p class="c1">0</p></td><td class="c5"><p class="c1">0</p></td></tr></tbody></table><p class="c1">&#x200b;</p><p class="c1">Matrix of Random effects: Slopes only</p><table class="c2"><col class="c3"/><col class="c3"/><col class="c3"/><tbody class="c4"><tr class="c4"><td class="c5"><p class="c1">&#x200b;</p></td><td class="c5"><p class="c1">Beta0</p></td><td class="c5"><p class="c1">Beta1</p></td></tr><tr class="c4"><td class="c5"><p class="c1">Beta0</p></td><td class="c5"><p class="c1">0&#160;</p></td><td class="c5"><p class="c1">0</p></td></tr><tr class="c4"><td class="c5"><p class="c1">Beta1</p></td><td class="c5"><p class="c1">0</p></td><td class="c5"><p class="c1">u1 (Random slope)</p></td></tr></tbody></table><p class="c1">&#x200b;</p><p class="c1">Matrix of Random effects: &#160;Intercepts and Slopes (Uncorrelated)</p><table class="c2"><col class="c3"/><col class="c3"/><col class="c3"/><tbody class="c4"><tr class="c4"><td class="c5"><p class="c1">&#x200b;</p></td><td class="c5"><p class="c1">Beta0</p></td><td class="c5"><p class="c1">Beta1</p></td></tr><tr class="c4"><td class="c5"><p class="c1">Beta0</p></td><td class="c5"><p class="c1">u0 (Random Intercept)</p></td><td class="c5"><p class="c1">0</p></td></tr><tr class="c4"><td class="c5"><p class="c1">Beta1</p></td><td class="c5"><p class="c1">0</p></td><td class="c5"><p class="c1">u1 (Random slope)</p></td></tr></tbody></table><p class="c1">&#x200b;</p><p class="c1">&#x200b;Matrix of Random effects: &#160;Intercepts and Slopes (Correlated)</p><table class="c2"><col class="c3"/><col class="c3"/><col class="c3"/><tbody class="c4"><tr class="c4"><td class="c5"><p class="c1">&#x200b;</p></td><td class="c5"><p class="c1">Beta0</p></td><td class="c5"><p class="c1">Beta1</p></td></tr><tr class="c4"><td class="c5"><p class="c1">Beta0</p></td><td class="c5"><p class="c1">u0 (Random Intercept)</p></td><td class="c5"><p class="c1">&#x200b;</p></td></tr><tr class="c4"><td class="c5"><p class="c1">Beta1</p></td><td class="c5"><p class="c1">u0,1 (Random Intercept, slope covariance)</p></td><td class="c5"><p class="c1">u1 (Random slope)</p></td></tr></tbody></table><p class="c1">&#x200b;</p><p class="c1">Observed spaghetti plots: Plots the observed y variable against every covariate for every nesting unit (e.g. students within classroom, time points within person etc.)</p><p class="c1">Estimated spaghetti plots: Plots the predicted &#160;y variable against every covariate for every nesting unit. When missing values are present, the case is omitted. Predicted values are stored in a new variable whose name is dependent variable name_suffix specified. The suffix is specified in the textbox.</p><p class="c1">Residual vs. Estimated: Plots residual value of the outcome against the estimated value (predicted). Useful for detecting heteroskedasticity.</p><p class="c1">Q-Q plot: Plots observed vs. expected (predicted) quantiles of residuals. Useful for testing normality.&#160;</p><p class="c1">Simple effects tests: When an interaction is present, tests the omnibus effect (if categorical) or slope (if a covariate) of one independent variable at every level of the other independent variable(s).</p><p class="c1">Interaction plots: When an interaction is present, plots all levels (if categorical) or slope (if a covariate) of one independent variable at every level of the other independent variable(s). Automatically detect allows the computer to decide whether bar graphs or line graphs should be displayed. &#160;Line graphs are used for covariates by default. &#160;Force categorical creates bar graphs for all variables.</p><p class="c1">&#x200b;</p><table class="c6"><col/><tbody class="c4"><tr class="c4"><td class="c7"><p class="c8"><span><span class="c9">lmer {lme4}&#x200b;</span></span></p></td></tr></tbody></table><p class="c10"><span><span class="c11">Fit Linear Mixed-Effects Models&#x200b;</span></span></p><p class="c10"><span><span class="c12">Description&#x200b;</span></span></p><p class="c13"><span><span class="c14">Fit a linear mixed-effects model (LMM) to data, via REML or maximum likelihood.&#x200b;</span></span></p><p class="c10"><span><span class="c12">Usage&#x200b;</span></span></p><p class="c8"><span><span class="c15">lmer(formula, data = NULL, REML = TRUE, control = lmerControl(),&#x200b;</span></span></p><p class="c8"><span><span class="c15">&#160;&#160;&#160;&#160;&#160;start = NULL, verbose = 0L, subset, weights, na.action,&#x200b;</span></span></p><p class="c8"><span><span class="c15">&#160;&#160;&#160;&#160;&#160;offset, contrasts = NULL, devFunOnly = FALSE, ...)&#x200b;</span></span></p><p class="c10"><span><span class="c12">Arguments&#x200b;</span></span></p><table class="c16"><col/><col/><tbody class="c4"><tr class="c4"><td class="c17"><p class="c8"><span><span class="c15">formula</span></span><span><span class="c9">&#x200b;</span></span></p></td><td class="c17"><p class="c13"><span><span class="c9">a two-sided linear formula object describing both the fixed-effects and random-effects part of the model, with the response on the left of a&#160;</span></span><span><span class="c15">~</span></span><span><span class="c9">&#160;operator and the terms, separated by&#160;</span></span><span><span class="c15">+</span></span><span><span class="c9">operators, on the right. Random-effects terms are distinguished by vertical bars (</span></span><span><span class="c15">|</span></span><span><span class="c9">) separating expressions for design matrices from grouping factors. Two vertical bars (</span></span><span><span class="c15">||</span></span><span><span class="c9">) can be used to specify multiple uncorrelated random effects for the same grouping variable. (Because of the way it is implemented, the&#160;</span></span><span><span class="c15">||</span></span><span class="c9">-syntax&#160;<span><span class="c18">works only for design matrices containing numeric (continuous) predictors</span></span>; to fit models with independent categorical effects, see&#160;</span><a href="http://127.0.0.1:26703/library/lme4/help/dummy" class="c19"><span><span class="c20">dummy</span></span></a><span><span class="c9">&#160;or the&#160;</span></span><span><span class="c15">lmer_alt</span></span><span><span class="c9">&#160;function from the&#160;</span></span><span><span class="c15">afex</span></span><span><span class="c9">&#160;package.)&#x200b;</span></span></p></td></tr><tr class="c4"><td class="c17"><p class="c8"><span><span class="c15">data</span></span><span><span class="c9">&#x200b;</span></span></p></td><td class="c17"><p class="c13"><span><span class="c9">an optional data frame containing the variables named in&#160;</span></span><span><span class="c15">formula</span></span><span><span class="c9">. By default the variables are taken from the environment from which&#160;</span></span><span><span class="c15">lmer</span></span><span><span class="c9">&#160;is called. While&#160;</span></span><span><span class="c15">data</span></span><span class="c9">&#160;is optional, the package authors&#160;<span><span class="c18">strongly</span></span>&#160;recommend its use, especially when later applying methods such as&#160;</span><span><span class="c15">update</span></span><span><span class="c9">&#160;and&#160;</span></span><span><span class="c15">drop1</span></span><span class="c9">&#160;to the fitted model (<span><span class="c18">such methods are not guaranteed to work properly if&#160;</span></span></span><span class="c18"><span class="c15">data</span></span><span class="c18"><span class="c9">&#160;is omitted</span></span><span><span class="c9">). If&#160;</span></span><span><span class="c15">data</span></span><span><span class="c9">&#160;is omitted, variables will be taken from the environment of&#160;</span></span><span><span class="c15">formula</span></span><span><span class="c9">&#160;(if specified as a formula) or from the parent frame (if specified as a character vector).&#x200b;</span></span></p></td></tr><tr class="c4"><td class="c17"><p class="c8"><span><span class="c15">REML</span></span><span><span class="c9">&#x200b;</span></span></p></td><td class="c17"><p class="c13"><span><span class="c9">logical scalar - Should the estimates be chosen to optimize the REML criterion (as opposed to the log-likelihood)?&#x200b;</span></span></p></td></tr></tbody></table><p class="c21">&#160;</p><table class="c16"><col/><col/><tbody class="c4"><tr class="c4"><td class="c17"><p class="c8"><span><span class="c15">na.action</span></span><span><span class="c9">&#x200b;</span></span></p></td><td class="c17"><p class="c13"><span><span class="c9">a function that indicates what should happen when the data contain&#160;</span></span><span><span class="c15">NA</span></span><span><span class="c9">s. The default action (</span></span><span><span class="c15">na.omit</span></span><span><span class="c9">, inherited from the 'factory fresh' value of&#160;</span></span><span><span class="c15">getOption(&quot;na.action&quot;)</span></span><span><span class="c9">) strips any observations with any missing values in any variables.&#x200b;</span></span></p></td></tr></tbody></table><div class="c22"><span><span class="c23">Value&#x200b;</span></span></div><p class="c24"><span><span class="c25">An object of class&#160;</span></span><a href="http://127.0.0.1:26703/library/lme4/help/merMod-class" class="c26"><span><span class="c27">merMod</span></span></a><span class="c25">&#160;(more specifically, an object of&#160;<span><span class="c18">subclass</span></span>&#160;</span><span class="c28"><span class="c29">lmerMod</span></span><span><span class="c25">), for which many methods are available (e.g.&#160;</span></span><span class="c28"><span class="c29">methods(class=&quot;merMod&quot;)</span></span><span><span class="c25">)&#x200b;</span></span></p><p class="c24"><span><span class="c25">&#160;</span></span></p><p class="c21"><span><span class="c30">R Help&#x200b;</span></span></p><p class="c21"><span><span class="c28">help(lmer)&#x200b;</span></span></p><p class="c24"><span><span class="c25">&#160;</span></span></p><p class="c24"><span><span class="c25">&#160;</span></span></p><p class="c24"><span><span class="c25">anova{ lmerTest }&#x200b;</span></span></p><p class="c21"><span><span class="c31">Description Methods for Function anova in Package lmerTest&#x200b;</span></span></p><p class="c21"><span><span class="c30">Usage&#x200b;</span></span></p><p class="c21">## S4 method for signature 'merModLmerTest' anova(object, ... , ddf=&quot;Satterthwaite&quot;, type=3)&#x200b;</p><p class="c21">&#160;</p><p class="c21"><span><span class="c30">Arguments&#x200b;</span></span></p><p class="c21">object: object of class &quot;merModLmerTest&quot; ... object of class &quot;merModLmerTest&quot;. Then the model comparison statistisc will be calculated&#x200b;</p><p class="c21">ddf: &#160;&#160;&#160;&#160;&#160;&#160;By default the Satterthwaite’s approximation to degrees of freedom is calculated. If ddf=&quot;Kenward-Roger&quot;, then the Kenward-Roger’s approximation is calculated using KRmodcomp function from pbkrtest package. If ddf=&quot;lme4&quot; then the anova table that comes from lme4 package is returned.&#x200b;</p><p class="c21">Type: &#160;&#160;&#160;type of hypothesis to be tested. Could be type=3 or type=2 or type = 1 (The definition comes from SAS theory) Details According to (Goodnight, J.H. 1976) the behaviour of the type 3 hypothesis is not fully studied for the situations with missing cells (where observations are missing at some factor-level combination). A warning is returned in such cases.&#x200b;</p><p class="c21"><span><span class="c31">&#160;</span></span></p><p class="c21"><span><span class="c30">Details&#x200b;</span></span></p><p class="c21">According to (Goodnight, J.H. 1976) the behaviour of the type 3 hypothesis is not fully studied for the situations with missing cells (where observations are missing at some factor-level combination). A warning is returned in such cases.&#x200b;</p><p class="c21"><span><span class="c30">R Help&#x200b;</span></span></p><p class="c21"><a href="https://cran.r-project.org/web/packages/lmerTest/lmerTest.pdf" class="c32">https://cran.r-project.org/web/packages/lmerTest/lmerTest.pdf</a><span><span class="c28">&#x200b;</span></span></p><p class="c21"><span><span class="c28">help(nagelkerke, package ='rcompanion')&#x200b;</span></span></p><p class="c21"><span><span class="c28">help(emmeans,package=’cld’)&#x200b;</span></span></p><p class="c21"><span><span class="c28">help(cld,package='emmeans')&#x200b;</span></span></p><p class="c21"><span><span class="c30">Reference material&#x200b;</span></span></p><p class="c21"><a href="http://rcompanion.org/handbook/I_07.html" class="c33">http://rcompanion.org/handbook/I_07.html</a><span><span class="c31">&#x200b;</span></span></p>`,
    title: 'Mixed Models Help'
}

class canExecuteDemo extends baseModal {
    constructor() {
        var config = {
            id: "canExecuteDemo",
            label: "Demo of Different Combinations of canExecute",
            modalType: "two",
            RCode: `cat({{selected.sel1 | safe}})
cat({{selected.sel2 | safe}})
cat({{selected.combone | safe}})`,
            pre_start_r: JSON.stringify({
                combone: "c(1,2,3,4,5)",
                sel2: 'c()',
                label1: "print('this is sparta\nanother one')"
            })
        }
        var objects = {
            content_var: {el: new srcVariableList(config, {action: "move"})},
            dataset_var: {el: new srcDataSetList(config, {action: "move"})},
            label1: { el: new preVar(config, { no: "label1", label: "", h: 6 }) },
            fileOpen: {el: new fileOpenControl(config, {no: "openFile", label: "File Open Control", extraction: "TextAsIs"})},
            folderOpen: {el: new fileOpenControl(config, {no: "openFolder", label: "File Open Control", type: 'folder', extraction: "TextAsIs"})},
            // variables: {
            //     el: new dstVariableList(config, {
            //         label: "Won't submit till this filled", 
            //         no: "vars", 
            //         filter: "Dataset", 
            //         //filter: "String|Numeric|Date|Logical|Ordinal|Nominal|Scale", 
            //         extraction: "CustomFormat",
            //         required: true,
            //         wrapped: "%>% dplyr::filter(%val%)"
            //     })
            // },
            combone: {
                el: new comboBox(config, {
                    no: 'combone',
                    label: "test",
                    multiple: true,
                    extraction: "NoPrefix|UseComma",
                    options: [],
                    default: ""
                })
            },
            swCase: {
                el: new switchCase(config, {
                    no: "swCase",
                    label: "Switch Case Control",
                    placeholder: "",
                    extraction: "TextAsIs",
                    type: "character"
                })
            }, 
            sel1: {
                el: new selectVar(config, {
                    no: "sel1",
                    label: "simple select",
                    extraction: "NoPrefix|UseComma",
                    options: ["one", "two", "three", "four"],
                    default: "two"
                })
            },
            sel2: {
                el: new selectVar(config, {
                    no: "sel2",
                    label: "simple select2",
                    extraction: "NoPrefix|UseComma",
                    options: [],
                    default: "",
                    onselect_r: {sel1: "c('{{value}}', '{{value}}', '{{value}}')"}
                })
            },
            // formulaBuilder: {
            //     el: new computeBuilder(config, {
            //         no: "formula"
            //     })
            // },
            // wrapC: {
            //     el: new wrapControl(config, {
            //         no: "wrapControl",
            //         label: "This is wrap that thing controll",
            //         options: [
            //             {
            //                 name: "mean",
            //                 wrapped: "mean(%, na.rm = TRUE)"
            //             },
            //             {
            //                 name: "avg",
            //                 wrapped: "avg(%, na.rm = TRUE)"
            //             }
            //         ],
            //         filter: "String|Numeric|Date|Logical|Ordinal|Nominal|Scale",
            //         required: true,
            //         extraction: "NoPrefix|UseComma",
            //         counts: true,
            //         upperdesc: "Specify a sortorder of whatever else you can specify here to have some nice text"
            //     })
            // },
            // sortO: {
            //     el: new wrapControl(config, {
            //         no: "sortOrder",
            //         label: "This is sort order controll",
            //         options: [
            //             {
            //                 name: "acs",
            //                 wrapped: "%"
            //             },
            //             {
            //                 name: "desc",
            //                 wrapped: "desc(%)"
            //             },
                        
            //         ],
            //         filter: "String|Numeric|Date|Logical|Ordinal|Nominal|Scale",
            //         required: true,
            //         extraction: "NoPrefix|UseComma",
            //         upperdesc: "Specify a sortorder of whatever else you can specify here to have some nice text",
            //         lowerdescdesc: "Some other text here as well"
            //     })
            // }

        }
        const content = {
            head: [objects.label1.el.content, objects.fileOpen.el.content, objects.folderOpen.el.content],
            left: [ objects.content_var.el.content, objects.dataset_var.el.content],
            right: [ objects.sel1.el.content, objects.sel2.el.content, 
                     objects.combone.el.content, objects.swCase.el.content],
            bottom: [],
            nav: {
                name: "CanExecute Demo",
                icon: "icon-chart-bar-regular",
                onclick: `r_before_modal("${config.id}")`,
                modal: config.id
            },
            sizeleft: 3,
            sizeright: 9
        }
        super(config, objects, content, help);
    }
}
 

module.exports.item = new canExecuteDemo().render()