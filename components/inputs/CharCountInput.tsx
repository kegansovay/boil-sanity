import {Stack} from '@sanity/ui'
import {StringInputProps, StringSchemaType} from 'sanity'

type Props = StringInputProps<StringSchemaType & {options?: {count?: number}}>


export function CharCountInput(props: Props) {
  const {schemaType} = props
  const count = schemaType?.options?.count || 160;
  
  return (
    <Stack space={3}>
      <div>
        <div
          style={{
            display: 'inline-block',
            padding: '0.25rem',
            borderRadius: '.2rem',
            fontSize: '0.75rem',
            border: `${props.value?.length && props.value?.length > count ? '1px solid #f76d5f' : '1px solid'}`,
          }}
        >
          {props.value?.length ? props.value.length : '0'}/{count}
        </div>
      </div>

      {props.renderDefault(props)}
    </Stack>
  )
}
