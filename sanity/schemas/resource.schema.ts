const schema  = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'slug',
      type:'slug',
      options: { source: 'title' }
    },
    {
      name:'downloadLink',
      title:"Download Link",
      type:'url',
      validation: (Rule: any) => Rule.required()

    },
    {
      name:'views',
      title: 'Views',
      type:'number',
      intialValue:0,
    },
    {
      name: 'poster',
      title: 'Poster',
      type:'image',
      validation:(Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      }
    },
    {
      name:'category',
      title:'Category',
      type:'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ['frontend', 'backend', 'fullstack','next 13','other']
      } 
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    }
  ]
}

export default schema