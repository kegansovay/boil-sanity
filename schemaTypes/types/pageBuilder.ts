import { defineField } from "sanity";
import ModulePickerInput from "../../components/inputs/ModulePickerInput";

export default defineField({
    name: 'pageBuilder',
    title: 'Page Builder',
    type: 'array',
    components: {input: ModulePickerInput},
    of: [
        {type: 'link'}
    ]
})