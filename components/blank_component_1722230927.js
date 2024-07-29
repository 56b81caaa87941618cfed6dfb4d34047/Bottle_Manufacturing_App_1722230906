/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722230927", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="blank-section" class="bg-gradient-to-r from-green-400 to-yellow-400 dark:from-green-600 dark:to-yellow-600 flex-1">
                <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="flex justify-center items-center">
                        <label for="toggle" class="flex items-center cursor-pointer">
                            <div class="mr-3 text-gray-700 font-medium">GPT-4</div>
                            <div class="relative">
                                <input type="checkbox" id="toggle" class="sr-only" v-model="useGPT4">
                                <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                                <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" :class="{ 'transform translate-x-full bg-green-400': useGPT4 }"></div>
                            </div>
                            <div class="ml-3 text-gray-700 font-medium">Claude 3</div>
                        </label>
                    </div>
                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
            useGPT4: false,
        };
    },
    methods: {
        // Start of toggleAI method
        toggleAI() {
            this.useGPT4 = !this.useGPT4;
            console.log(this.useGPT4 ? 'Using GPT-4' : 'Using Claude 3');
        }
        // End of toggleAI method
    }
});
